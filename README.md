This program shows in console all the indicators from the Indicators API of the World Bank that have data available for China.

There's a problem with this API. It has 17494 indicators, but many of them do not work because they don't have data.

For this reason, I decided to create this program that would return an array with all the indicators that have data for a well studied country by the World Bank, i.e., China.

The elements of the array are objects with two properties: id and name of the indicator.

The big problem with this program is that it requires a lot of resources since it makes almost 20 thousand fetches.
