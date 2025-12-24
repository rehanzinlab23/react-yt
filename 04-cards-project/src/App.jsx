import Modal from "./components/Modal";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://img.freepik.com/premium-vector/google-logo_1273375-1572.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "San Francisco, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6HM39KxN2EDTZOOTvUm222OW_NNkcA2YUsA&s",
      companyName: "Brave",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "New York, USA",
    },
    {
      brandLogo:
        "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Menlo Park, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9Mdeo4S4YXDOaI4Xm53DaaHVlccVG_j7Yg&s",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Seattle, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      datePosted: "5 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "Redmond, USA",
    },
    {
      brandLogo:
        "https://www.clipartmax.com/png/middle/39-396698_tesla-logo-%5Beps-motors%5D-tesla-logo-icon.png",
      companyName: "Tesla",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Austin, USA",
    },
    {
      brandLogo:
        "https://crystalpng.com/wp-content/uploads/2025/05/ibm-logo.png",
      companyName: "IBM",
      datePosted: "6 weeks ago",
      post: "DevOps Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Armonk, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 weeks ago",
      post: "Database Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$78/hr",
      location: "Austin, USA",
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/nvidia-7.svg",
      companyName: "NVIDIA",
      datePosted: "10 weeks ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$100/hr",
      location: "Remote",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Modal
              company={elem.companyName}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              brandLogo={elem.brandLogo}
              location={elem.location}
              datePosted={elem.datePosted}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
