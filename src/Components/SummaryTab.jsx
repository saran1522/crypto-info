import Markdown from "markdown-to-jsx";

const CustomLink = ({ children, href }) => {
  return (
    <a href={href} className="border-b-2 text-blue-500 border-blue-500">
      {children}
    </a>
  );
};

function SummaryTab({ description }) {
  return (
    <Markdown
      className="leading-relaxed tracking-normal"
      options={{
        overrides: {
          a: {
            component: CustomLink,
          },
        },
      }}
    >
      {description}
    </Markdown>
  );
}

export default SummaryTab;
