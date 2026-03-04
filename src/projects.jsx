import "./project.css";
import Card from "./Card";

const projectsData = [
  {
    imgSrc: "iTurn0image62",
    title: "Business Growth Insights",
    description:
      "Analyzing sales, finance, and customer trends using SQL, Python, and Power BI to drive strategic decisions.",
    demoLink: "https://google.com",
    codeLink: "https://github.com",
  },
  {
    imgSrc: "iTurn0image65",
    title: "Financial Analytics Dashboard",
    description:
      "A Power BI project focusing on revenue, profit, and expense analysis for commerce students.",
    demoLink: "https://google.com",
    codeLink: "https://github.com",
  },
  {
    imgSrc: "iTurn0image34",
    title: "Customer Insights Analysis",
    description:
      "Exploring customer behavior and satisfaction metrics with dashboards and predictive models.",
    demoLink: "https://google.com",
    codeLink: "https://github.com",
  },
  {
    imgSrc: "iTurn0image92",
    title: "Market Trend Analysis",
    description:
      "Studying market penetration, growth rate, and competitive positioning with data-driven insights.",
    demoLink: "https://google.com",
    codeLink: "https://github.com",
  },
];

function Projects() {
  return (
    <div id="project">
      <h1>Projects</h1>
      <div className="cardcontainer">
        {/* Data-driven rendering keeps cards easy to maintain */}
        {projectsData.map((project) => (
          <Card
            key={project.title}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            DemoLink={project.demoLink}
            CodeLink={project.codeLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
