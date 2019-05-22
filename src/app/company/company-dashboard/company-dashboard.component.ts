import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {

  DemoData = [{
    "entity": "ad",
    "id": "CA360497",
      "language": "en-US",
      "referral_channel": "www.google.com",
      "creation_time": "2015-05-23 13:35:00",  //please use UTC  timezone.
      "ip_address": "204.23.100.11",  //from DeviceRecon, but you can provide it too.
      "session_id": "ES45D54ER82GF5D2DF5DFG1DF5DFG51DF",
      "device_id": "87YU98YUHJK", //from DeviceRecon
      "device_user_agent": "CorpInc/2.1.8 (build: 140111135; samsung SM-N910V LMY47X; Android 5.1.1; en_US)",  //from DeviceRecon
      "status": "ACTIVE",
      "market_region": "US",
      "user_id": "MCBUGGY1978",  //user who created the ad
      "user_first_name": "John",
      "user_last_name": "Doe",
      "user_email": "john.doe@gmail.com",
      "user_phone": "6502398673",
      "title": "New motorcycle battery",
      "description": "Selling brand new motorcycle battery $70 obo",
      "image_phash": "723443A87934IURJE",
      "image_url": "www.buy-my-stuff.com/CA360497/image.html",
      "category_level1": "Electronics",
      "category_level2": "General",
      "category_level3": "Battery",
      "listing_type": "Premium",
      "item_condition": "new",
      "location": "Palo Alto",
      "currency" : "USD",
      "price": 70,
      "price_usd": 70,
      "custom_field_1": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_2": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_3": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_4": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_5": "xyz" //any additional field you would like to send. Please let us know the final field name.
  },
    {
      "entity": "ad",
      "id": "CA360497",
      "language": "en-US",
      "referral_channel": "www.google.com",
      "creation_time": "2015-05-23 13:35:00",  //please use UTC  timezone.
      "ip_address": "204.23.100.11",  //from DeviceRecon, but you can provide it too.
      "session_id": "ES45D54ER82GF5D2DF5DFG1DF5DFG51DF",
      "device_id": "87YU98YUHJK", //from DeviceRecon
      "device_user_agent": "CorpInc/2.1.8 (build: 140111135; samsung SM-N910V LMY47X; Android 5.1.1; en_US)",  //from DeviceRecon
      "status": "ACTIVE",
      "market_region": "US",
      "user_id": "MCBUGGY1978",  //user who created the ad
      "user_first_name": "John",
      "user_last_name": "Doe",
      "user_email": "john.doe@gmail.com",
      "user_phone": "6502398673",
      "title": "New motorcycle battery",
      "description": "Selling brand new motorcycle battery $70 obo",
      "image_phash": "723443A87934IURJE",
      "image_url": "www.buy-my-stuff.com/CA360497/image.html",
      "category_level1": "Electronics",
      "category_level2": "General",
      "category_level3": "Battery",
      "listing_type": "Premium",
      "item_condition": "new",
      "location": "Palo Alto",
      "currency" : "USD",
      "price": 70,
      "price_usd": 70,
      "custom_field_1": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_2": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_3": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_4": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_5": "xyz" //any additional field you would like to send. Please let us know the final field name.
    },
    {
      "entity": "ad",
      "id": "CA360497",
      "language": "en-US",
      "referral_channel": "www.google.com",
      "creation_time": "2015-05-23 13:35:00",  //please use UTC  timezone.
      "ip_address": "204.23.100.11",  //from DeviceRecon, but you can provide it too.
      "session_id": "ES45D54ER82GF5D2DF5DFG1DF5DFG51DF",
      "device_id": "87YU98YUHJK", //from DeviceRecon
      "device_user_agent": "CorpInc/2.1.8 (build: 140111135; samsung SM-N910V LMY47X; Android 5.1.1; en_US)",  //from DeviceRecon
      "status": "ACTIVE",
      "market_region": "US",
      "user_id": "MCBUGGY1978",  //user who created the ad
      "user_first_name": "John",
      "user_last_name": "Doe",
      "user_email": "john.doe@gmail.com",
      "user_phone": "6502398673",
      "title": "New motorcycle battery",
      "description": "Selling brand new motorcycle battery $70 obo",
      "image_phash": "723443A87934IURJE",
      "image_url": "www.buy-my-stuff.com/CA360497/image.html",
      "category_level1": "Electronics",
      "category_level2": "General",
      "category_level3": "Battery",
      "listing_type": "Premium",
      "item_condition": "new",
      "location": "Palo Alto",
      "currency" : "USD",
      "price": 70,
      "price_usd": 70,
      "custom_field_1": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_2": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_3": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_4": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_5": "xyz" //any additional field you would like to send. Please let us know the final field name.
    }
    ,
    {
      "entity": "ad",
      "id": "CA360497",
      "language": "en-US",
      "referral_channel": "www.google.com",
      "creation_time": "2015-05-23 13:35:00",  //please use UTC  timezone.
      "ip_address": "204.23.100.11",  //from DeviceRecon, but you can provide it too.
      "session_id": "ES45D54ER82GF5D2DF5DFG1DF5DFG51DF",
      "device_id": "87YU98YUHJK", //from DeviceRecon
      "device_user_agent": "CorpInc/2.1.8 (build: 140111135; samsung SM-N910V LMY47X; Android 5.1.1; en_US)",  //from DeviceRecon
      "status": "ACTIVE",
      "market_region": "US",
      "user_id": "MCBUGGY1978",  //user who created the ad
      "user_first_name": "John",
      "user_last_name": "Doe",
      "user_email": "john.doe@gmail.com",
      "user_phone": "6502398673",
      "title": "New motorcycle battery",
      "description": "Selling brand new motorcycle battery $70 obo",
      "image_phash": "723443A87934IURJE",
      "image_url": "www.buy-my-stuff.com/CA360497/image.html",
      "category_level1": "Electronics",
      "category_level2": "General",
      "category_level3": "Battery",
      "listing_type": "Premium",
      "item_condition": "new",
      "location": "Palo Alto",
      "currency" : "USD",
      "price": 70,
      "price_usd": 70,
      "custom_field_1": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_2": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_3": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_4": "xyz", //any additional field you would like to send. Please let us know the final field name.
      "custom_field_5": "xyz" //any additional field you would like to send. Please let us know the final field name.
    }];
  constructor() { }

  ngOnInit() {
  }

}
