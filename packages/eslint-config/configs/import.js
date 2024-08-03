module.exports = {
  /*
   * Сортировка импортов по группам, а внутри них по алфавиту.
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
   */
  "import/order": [
    "warn",
    {
      groups: [
        "builtin",
        "external",
        "internal",
        ["parent", "sibling"],
        "object",
        "type",
        "index",
      ],
      pathGroups: [
        {
          pattern: "{react,react-dom/**}",
          group: "external",
          position: "before",
        },
      ],
      pathGroupsExcludedImportTypes: ["react"],
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    },
  ],
  "import/no-anonymous-default-export": "off",
};
