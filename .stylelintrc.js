{
  "extends": "stylelint-config-recommended-scss",
  "plugins": [
    "stylelint-order",
    "stylelint-scss"
  ],
  "rules": {
    "no-empty-source": null,
    "no-descending-specificity": null,
    "indentation": 2,
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "rules",
      "at-rules"
    ]
  }
}