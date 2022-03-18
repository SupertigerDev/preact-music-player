interface Props {
  onClick?: any
  className: string;
  children?: any
}

export default function Clickable(props: Props) {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onClick(event);
    }
  };
  return (
    <div
      role="button"
      tabIndex={0}
      className={props.className}
      onClick={props.onClick}
      onKeyDown={onKeyDown}
    >
      {props.children}

    </div>
  );
}

Clickable.defaultProps = {
  children: undefined,
  onClick: undefined,
};
