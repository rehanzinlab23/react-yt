import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww",
      intro: "",
      color: "blue",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      color: "orange",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      color: "royalblue",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      color: "red",
      tag: "Average",
    },
    {
      img: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      color: "pink",
      tag: "Lonely",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
