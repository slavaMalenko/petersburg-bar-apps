module.exports = {
  /*
   * Необходимо поддерживать алфавитный порядок в пропсах.
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
   */
  "react/jsx-sort-props": [
    2,
    {
      ignoreCase: true,
      shorthandFirst: true,
      callbacksLast: true,
      reservedFirst: true,
    },
  ],

  /*
   * Параметры названия обработчиков событий в компонентах.
   * https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-handler-names.md
   */
  "react/jsx-handler-names": [
    2,
    {
      checkLocalVariables: false, // В сторонних компонентах не всегда соответствует правилу - отключим
      checkInlineFunction: true,
    },
  ],

  /**
   * Запрещаются ненужные выражения JSX, когда достаточно одних литералов, или применить выражения JSX к литералам в дочерних элементах или атрибутах JSX.
   * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
   */
  "react/jsx-curly-brace-presence": [
    "error",
    { props: "never", children: "never" },
  ],

  /**
   * Запрещаются отсутствующие key реквизиты в литералах итераторов/коллекций.
   * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
   */
  "react/jsx-key": "error",

  /**
   * Запретить отсутствие displayName в определении компонента React.
   * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
   */
  "react/display-name": "off",

  /**
   * Запрещаются неиспользуемые переменные.
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md
   */
  "@typescript-eslint/no-unused-vars": ["error"],

  /**
   * Согласованное использование импорта типов.
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md
   */
  "@typescript-eslint/consistent-type-imports": [
    "error",
    {
      prefer: "type-imports",
    },
  ],

  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off",
};
