<div align="center">

# 🏞️ BuddyTrail

<i>Welcome to **BuddyTrail** – your ultimate travel companion! 🌍✈️ Whether you're planning a family vacation 👨‍👩‍👧‍👦 or an adventure with friends 👫, BuddyTrail helps you discover stunning destinations 🏖️🏰, find the best hotels 🏨, and book affordable flights 💺 with ease.</i>

</div>

<div align="center">
<br>

<table align="center">
    <thead align="center">
        <tr>
            <td><b>🌟 Stars</b></td>
            <td><b>🍴 Forks</b></td>
            <td><b>🐛 Issues</b></td>
            <td><b>🔔 Open PRs</b></td>
            <td><b>🔕 Closed PRs</b></td>
            <td><b>🛠️ Languages</b></td>
            <td><b>🌐 Contributors</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img alt="Stars" src="https://img.shields.io/github/stars/PriyaGhosal/BuddyTrail?style=flat&logo=github"/></td>
            <td><img alt="Forks" src="https://img.shields.io/github/forks/PriyaGhosal/BuddyTrail?style=flat&logo=github"/></td>
            <td><img alt="Issues" src="https://img.shields.io/github/issues/PriyaGhosal/BuddyTrail?style=flat&logo=github"/></td>
            <td><img alt="Open Pull Requests" src="https://img.shields.io/github/issues-pr/PriyaGhosal/BuddyTrail?style=flat&logo=github"/></td>
            <td><img alt="Closed Pull Requests" src="https://img.shields.io/github/issues-pr-closed/PriyaGhosal/BuddyTrail?style=flat&color=critical&logo=github"/></td>
            <td><img alt="Languages" src="https://img.shields.io/github/languages/count/PriyaGhosal/BuddyTrail?style=flat&color=critical&logo=github"></td>
            <td><img alt="Contributors" src="https://img.shields.io/github/contributors/PriyaGhosal/BuddyTrail?color=2b9348"></td>
        </tr>
    </tbody>
</table>
</div>

<br/>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">

### This project is now OFFICIALLY accepted for:

<table align="center">

   <tr>
      <th>Event Logo</th>
      <th>Event Name</th>
      <th>Event Description</th>
   </tr>
   <tr>
      <td><img src="https://github.com/Annapoornaaradhya/BuddyTrail/blob/Video/img/gssocextd1.jpg" width="200" height="auto" loading="lazy" alt="GSSoC 24"/></td>
      <td>GirlScript Summer of Code Extended 2024</td>
      <td>A month-long Open Source Program by GirlScript Foundation, aimed at bringing more beginners to Open-Source Software Development.</td>
   </tr>
   <tr>
      <td><img src="https://github.com/Annapoornaaradhya/BuddyTrail/blob/Video/img/hacktoberfest1.png" width="200" height="auto" loading="lazy" alt="Hacktoberfest 2024"/></td>
      <td>Hacktoberfest 2024</td>
      <td>A month-long celebration of open source software, encouraging contributions and promoting a global community of developers.</td>
   </tr>

</table>

<br/>
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">

## 📸 Website Preview

![Screenshot 2024-10-19 143805](https://github.com/user-attachments/assets/96abf31b-b1bc-4b05-ae4a-00e225da1e0c)
![Screenshot 2024-10-19 143906](https://github.com/user-attachments/assets/e77ac002-1a7b-4172-a847-b8ec950a1f89)
![Screenshot 2024-10-19 143959](https://github.com/user-attachments/assets/2a043906-7b91-4cac-bca0-b6ab195edcee)

<br/>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">

## 🚀 Features

- **🗺️ Interactive Travel Map**: Explore popular destinations across India and beyond. Click on markers to learn more about each location.
- **🌙🌞 Dark & Bright Mode**: Switch between modes for a comfortable browsing experience, day or night.
- **🏨 Hotel Finder**: Discover the best hotels at affordable rates, tailored to your budget and preferences.
- **✈️ Flight Booking**: Book flights at competitive prices with options that suit your travel needs.
- **📝 Travel Blog**: Read tips, guides, and personal stories from seasoned travelers.
- **🌐 Multi-Language Support**: View the website in various languages, catering to a global audience.
- **⭐ User Reviews and Ratings**: Share and read reviews for destinations, hotels, flights, and activities.

<br/>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">

## 🛠️ Technologies Used

- **📝 HTML/CSS**: For building and styling the website structure.
- **⚙️ JavaScript**: For interactive features like the map and mode toggling.
- **🗺️ Google Maps API**: For displaying the interactive travel map.
- **📱 Responsive Design**: Fully responsive to ensure compatibility with all devices.

<br/>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">

## 📡 API Documentation

### Overview
The BuddyTrail API allows you to interact with travel data, including destinations, hotels, and flights.

### Endpoints

#### 🌍 Get Destinations
- **URL:** `/api/destinations`
- **Method:** `GET`
- **Description:** Fetch a list of popular travel destinations.

#### 🏨 Get Hotels
- **URL:** `/api/hotels`
- **Method:** `GET`
- **Description:** Retrieve available hotels for a specified destination.

#### ✈️ Book Flight
- **URL:** `/api/book-flight`
- **Method:** `POST`
- **Description:** Book a flight with the provided travel details.

### Usage Example
```bash
curl -X GET "https://api.buddytrail.com/api/destinations"
