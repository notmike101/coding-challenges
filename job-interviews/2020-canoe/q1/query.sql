SELECT
    code,
    year,
    MAX(((countries.govt_debt / countries.gdp_per_capita) * 100)) AS debt_average_percent
FROM countries
WHERE
    gdp_per_capita > 40000 AND
    year > YEAR(CURDATE()) - 4
GROUP BY year, code
ORDER BY year, debt_average_percent DESC
LIMIT 0, 3