const socialMediaBoard = document.querySelector(`#social-media__dashboard`);
const overviewBoard = document.querySelector(`#overview__today`);

const dashboard = [
  [
    {
      id: 1,
      title: "FOLLOWERS",
      username: "@nathanf",
      followers: 1987,
      todaysCount: "+12",
      colors: ["var(--facebook)", "var(--lime-green)"],
      icon: "./images/icon-facebook.svg",
    },
    {
      id: 2,
      title: "FOLLOWERS",
      username: "@nathanf",
      followers: 1044,
      todaysCount: "+99",
      colors: ["var(--twitter)", "var(--lime-green)"],
      icon: "./images/icon-twitter.svg",
    },
    {
      id: 3,
      title: "FOLLOWERS",
      username: "@realnathanf",
      followers: "11k",
      todaysCount: "+1099",
      colors: ["var(--instagram)", "var(--lime-green)"],
      icon: "./images/icon-instagram.svg",
    },
    {
      id: 4,
      title: "SUBSCRIBERS",
      username: "Nathan F.",
      followers: 8239,
      todaysCount: "-144",
      colors: ["var(--youtube)", "var(--bright-red)"],
      icon: "./images/icon-youtube.svg",
    },
  ],
  [
    {
      id: 1,
      title: "Page Views",
      count: 87,
      rate: "3%",
      colors: "var(--lime-green)",
      icon: "./images/icon-facebook.svg",
    },
    {
      id: 2,
      title: "Likes",
      count: 52,
      rate: "2%",
      colors: "var(--bright-red)",
      icon: "./images/icon-facebook.svg",
    },
    {
      id: 3,
      title: "Likes",
      count: 5462,
      rate: "2257%",
      colors: "var(--lime-green)",
      icon: "./images/icon-instagram.svg",
    },
    {
      id: 4,
      title: "Page Views",
      count: "52k",
      rate: "1357%",
      colors: "var(--lime-green)",
      icon: "./images/icon-instagram.svg",
    },
    {
      id: 5,
      title: "Retweets",
      count: 117,
      rate: "303%",
      colors: "var(--lime-green)",
      icon: "./images/icon-twitter.svg",
    },
    {
      id: 6,
      title: "Likes",
      count: 507,
      rate: "3%",
      colors: "var(--lime-green)",
      icon: "./images/icon-twitter.svg",
    },
    {
      id: 7,
      title: "Likes",
      count: 107,
      rate: "19%",
      colors: "var(--bright-red)",
      icon: "./images/icon-youtube.svg",
    },
    {
      id: 8,
      title: "Total Views",
      count: 1407,
      rate: "12%",
      colors: "var(--bright-red)",
      icon: "./images/icon-youtube.svg",
    },
  ],
];

const renderSocialMediaDashboard = () => {
  dashboard[0].map((data) => {
    socialMediaBoard.innerHTML += `
        <div class="hero__dashboard-content" style="border-top: 0.3rem ${data.colors[0]} solid">
            <a href="#"
            ><img src="${data.icon}" alt="social media icon" />
            <p><span>${data.username}</span></p></a
            >
            <h1>${data.followers}</h1>
            <p>${data.title}</p>
            <p><span style="color: ${data.colors[1]}">${data.todaysCount} Today</span></p>
        </div>
    `;
  });
};

const renderOverviewToday = () => {
  dashboard[1].map((data) => {
    overviewBoard.innerHTML += `
            <div class="hero__dashboard-content overview__row">
            <p>${data.title}</p>
              <a href="#"><img src="${data.icon}" alt="social media icon" /> </a>
              <h1>${data.count}</h1>
              <p style="color: ${data.colors}">${data.rate}</p>
            </div>
        `;
  });
};

window.addEventListener("DOMContentLoaded", () => {
  renderSocialMediaDashboard();
  renderOverviewToday();
});
