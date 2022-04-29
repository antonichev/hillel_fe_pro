
function wrapTags(content, tag, isClosed = true){

  if (isClosed) {
    return `<${tag}>${content}</${tag}>`;
  } else {
    return `<${tag} ${content}/>`;
  }

}

var res = wrapTags('Hello world', 'p');
console.log(res);

var res = wrapTags('src="./index.js"', 'script', false);
console.log(res);