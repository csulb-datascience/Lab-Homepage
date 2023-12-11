import locale
import sys
import json
import csv
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager


class Scrapper:
    def __init__(self, test='y'):
        self.test = test
        locale.setlocale(locale.LC_TIME, 'ko_KR.UTF-8')

    def __get_driver(self):
        opts = Options()
        opts.add_argument('window-size=1024x768')
        if self.test == 'n':
            opts.add_argument('headless')
        return webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=opts)

    def run(self, listFile):
        driver = self.__get_driver()
        with open(listFile, 'r') as csvFile:
            for line in csv.reader(csvFile):
                driver.get(line[0])
                table = WebDriverWait(driver, 5).until(EC.presence_of_element_located(('xpath', '//*[@id="gsc_a_b"]')))
                data = list()
                for row in table.find_elements('xpath', 'tr'):
                    link = row.find_element('xpath', 'td[1]/a').get_attribute('href')
                    data.append(self.__get_detail(link))
                
                # Convert the whole list into json format
                data = json.dumps(data)
                file = open('data/' + line[1], 'w+')
                
                # Assuming there's no need to convert the data into string
                file.write(data)
                file.close()
        driver.close()
        driver.quit()

    def __get_detail(self, link):
        driver = self.__get_driver()
        driver.get(link)
        detail = dict()
        detail['Title'] = driver.find_element('xpath', '//*[@id="gsc_oci_title"]/a').text
        detail['Link'] = driver.find_element('xpath', '//*[@id="gsc_oci_title"]/a').get_attribute('href')
        for row in driver.find_elements('xpath', '//*[@class="gs_scl"]'):
            key = row.find_element('xpath', '*[@class="gsc_oci_field"]').text
            if key != 'Scholar articles':
                value = row.find_element('xpath', '*[@class="gsc_oci_value"]').text
                detail[key] = value
        driver.close()
        driver.quit()

        # Return dict
        return detail


if __name__ == '__main__':
    driver = Scrapper(sys.argv[1])
    driver.run(sys.argv[2])