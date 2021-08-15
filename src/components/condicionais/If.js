export function IfTrue(props) {
  if (props.validacao) {
    return props.children;
  } else {
    return false;
  }
}
