# Video-Calling-Website

## Setup: (For UI Kit)

- Create an NextJS application using `npx create-next-app@latest`.
- Now Create an page where user can set his username and if user has meeting id then he can join the meeting by clicking on join button. If user does not have meeting id then he can create one by clicking on the create an meeting button.
- when he click on create meeting button or join button then he will be redirected to a dynamic page where he can join the meeting. like: `/room/:meetingId`.
- Now go to zego cloud website and click on the start building button to create an accoun or if you already have an account then click on login button.
- After login/create account successfully go to dashboard and create an project from dashboard by clicking on create your project.
- Now select which use case you want to set up on your project and click on next button.
- Now set a project name and click on start with UI Kit button. It takes some time to create your project.
- Now select the plartform you want to use. like (web, android, ios).
- Then Setup basic configaration and click on save & start to intregate button.
- Now go dashboard and click on the project you have created. Here you will get AppID and ServerSecret. Add those on your application on .env file.
- Then open view guide on new tab and select using npm package for guide.
- Now Install zegocloud. and import it on dynamic page where user can join the meeting.
- Now get the meetingID from the url on your dynamic page. Then follow the documantation on zego cloud website or you can follow my code.
- If You follow those steps perfectly you can show the Join meeting UI in the dynamic page.

## Installation:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a .env file and add the `NEXT_PUBLIC_ZEGO_APP_ID` and `NEXT_PUBLIC_ZEGO_SERVER_SECRET`.
4. Run the website using `npm run dev`.

## Description:

Welcome to Peace - where every act of kindness makes a difference. At Peace, we believe in the power of giving and the impact it can have on the lives of those in need. Explore our donation posts below and join us in spreading hope, compassion, and support to communities around the world. Together, let's make the world a brighter and more peaceful place for everyone. At Peace, we believe that every act of kindness, no matter how small, has the power to create positive change. Join us on our mission to build a more peaceful and equitable world through the simple act of giving. Together, we can make a difference.

## Tecnology I have Used:

1.JavaScript 2. NextJS 3. Zustand 4. Tailwind CSS 5. Zego Cloud
