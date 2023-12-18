import contact_data from '../json_data/contact.json' assert { type: "json" };

const email = contact_data['email'];
const phone = contact_data['phone']
const address = contact_data['address'];
const social = contact_data['social'];

createHeader();
createMenu();
createFooter(email, phone, address, social);
