import json
data = ['{"Title": "Walking-Related Human Activity Recognition for People with Mobility Disabilities Using a Smartwatch: A Pilot Study with Five Scenarios", "Authors": "Myungwon Kang, Sungjin Hwang, Jucheol Moon, Jiwoong Heo, Yeji Woo, Hansung Kim, Jaehyuk Cha, Kwanguk Kenny Kim", "Publication date": "2023/7", "Journal": "\\ud55c\\uad6d\\ucef4\\ud4e8\\ud130\\uadf8\\ub798\\ud53d\\uc2a4\\ud559\\ud68c \\ud559\\uc220\\ub300\\ud68c", "Pages": "36-37", "Description": "Human activity recognition (HAR) is a widely applied technology with significant benefits when merged with smartwatch technology. However, smartwatch-based HAR studies for people with mobility disabilities have not been conducted rigorously. In this study, we propose a smartwatch-based HAR technique for detecting the type of mobility aids. Five walkingrelated scenarios across different mobility aids and environments were studied. Smartwatch data from six activities in two environments were collected from 40 participants, and six different machine learning techniques were investigated. The models classified the six activities with an average accuracy of 93.06%. We found that smartwatches can classify multiple walking-related activities for people with mobility disabilities.", "Scholar articles": "Walking-Related Human Activity Recognition for People with Mobility Disabilities Using a Smartwatch: A Pilot Study with Five Scenarios\\nM Kang, S Hwang, J Moon, J Heo, Y Woo, H Kim\\u2026 - \\ud55c\\uad6d\\ucef4\\ud4e8\\ud130\\uadf8\\ub798\\ud53d\\uc2a4\\ud559\\ud68c \\ud559\\uc220\\ub300\\ud68c, 2023"}', '{"Title": "User and Period Independent Transportation Mode Detection for Wheelchair Users", "Authors": "Sungjin Hwang, Jiwoong Heo, Jucheol Moon, Jaehwan You, Hansung Kim, Jaehyuk Cha, Kwanguk Kim", "Publication date": "2023/1/31", "Journal": "IEEE Access", "Volume": "11", "Pages": "10801-10812", "Publisher": "IEEE", "Description": "Transportation mode detection (TMD) is an important research area in human activity recognition. It can improve the mobility and accessibility of people by providing a better understanding of their mobility patterns, thereby enhancing their quality of life and social inclusion. Although previous studies of TMD for people without mobility disabilities exhibited, the performance of TMD models on new users and periods was limited. This issue would be more important for people with mobility disabilities. This study investigated the negative impact of user and period differences on the performance of TMD for wheelchair users (wTMD) and suggested a method to address these challenges. Our main findings are (1) user and period differences degraded the wTMD performance from 94.28% to 59.32%; (2) the multi-DenseNet with a soft voting ensemble provided a 76.49% accuracy to data from different users and periods. We \\u2026", "Total citations": "Cited by 1\\n2023", "Scholar articles": "User and Period Independent Transportation Mode Detection for Wheelchair Users\\nS Hwang, J Heo, J Moon, J You, H Kim, J Cha, K Kim - IEEE Access, 2023\\nCited by 1 Related articles All 2 versions"}', '{"Title": "Online Waypoint Path Refinement for Mobile Robots using Spatial Definition and Classification based on Collision Probability", "Authors": "Hongseok Cheon, Taehyoung Kim, Byung Kook Kim, Jucheol Moon, Hongjun Kim", "Publication date": "2022/9/12", "Journal": "IEEE Transactions on Industrial Electronics", "Volume": "70", "Issue": "7", "Pages": "7004-7013", "Publisher": "IEEE", "Description": "A novel online path refinement method is suggested for mobile robots, which refines the given path, including several waypoints using sensor data with a low computational load. The method periodically plans a waypoint path from the current robot position to a certain waypoint on the given waypoint path. While the robot moves along the given path, the path is continuously refined to avoid collisions and local minima caused by unmapped obstacles that are not represented on the map but sensed by sensors. Also, if a shortcut is detected while the robot is moving, the shortcut replaces the existing waypoint path. This online waypoint path refinement (OWPR) method is very practical in terms of computation time and memory size since it is performed regardless of the size of the workspace. To validate the actual performances of OWPR method, various simulations and experiments are conducted. As a result of the \\u2026", "Total citations": "Cited by 2\\n2023", "Scholar articles": "Online Waypoint Path Refinement for Mobile Robots using Spatial Definition and Classification based on Collision Probability\\nH Cheon, T Kim, BK Kim, J Moon, H Kim - IEEE Transactions on Industrial Electronics, 2022\\nCited by 2 Related articles All 2 versions"}', '{"Title": "A Novel Method for Traffic Estimation and Air Quality Assessment in California", "Authors": "Jucheol Moon, Jin Gi Hong, Tae-Won Park", "Publication date": "2022/7/26", "Journal": "Sustainability", "Volume": "14", "Issue": "15", "Pages": "9169", "Publisher": "MDPI", "Description": "Motor vehicle traffic is recognized as one of the critical factors that causes air pollution; however, the relationship between traffic volume and air pollutant concentrations is unclear, especially at a local level. Traditional traffic volume monitoring systems collect traffic data through counting the number of vehicles, using either sensors or surveillance cameras, but they have clear limitations such as they can only monitor certain areas and specific occasions. To overcome such limitations, we introduce a method of monitoring traffic volume in the local area by collecting estimated travel times for virtual trips in Google Maps. We began collecting the data in January 2020; ironically, the COVID-19 pandemic provided a natural experimental environment of showing unusual trends in traffic volume and unexpected changes in air pollutants. We demonstrate monthly traffic volumes in urban areas and analyze the correlation of traffic volume with typical traffic-related air pollutants using the proposed traffic volume monitoring method.", "Total citations": "Cited by 5\\n2022\\n2023", "Scholar articles": "A Novel Method for Traffic Estimation and Air Quality Assessment in California\\nJ Moon, JG Hong, TW Park - Sustainability, 2022\\nCited by 5 Related articles All 6 versions"}']
json_data = json.dumps(data)
with open("sample.json", 'w') as output_file:
    output_file.write(json_data)