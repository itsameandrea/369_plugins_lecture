import MarkdownIt from 'markdown-it';

const initMarkdown = () => {
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const markdown = new MarkdownIt();

  console.log(preview)

  textarea.addEventListener('keyup', (event) => {
    const html = markdown.render(textarea.value);
    preview.innerHTML = html;
  });
};

export { initMarkdown };
