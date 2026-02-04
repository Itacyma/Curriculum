function NoTranslate({ as: Component = 'span', className = '', children, ...props }) {
  const combinedClassName = ['notranslate', className].filter(Boolean).join(' ');

  return (
    <Component translate="no" className={combinedClassName} {...props}>
      {children}
    </Component>
  );
}

export { NoTranslate };
