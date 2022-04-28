/*
Ресурс: https://www.bbc.com/
1. найти https://prnt.sc/hnig01
//nav[contains(@class, "international")]//li[@class="orb-nav-sport"]
nav.international .orb-nav-sport

2. найти https://prnt.sc/hnigl5
//div[contains (@class, "media media--hero")]
div[data-bbc-source="Europe"]

3. найти https://prnt.sc/hnij47
//*[text() = 'Wednesday, 27 April'] или //*[normalize-space(text()) = 'Wednesday, 27 April']
Написал для h1, который содержит текст
//h2[@class='module__title']//following-sibling::text()[1]
а это надеюсь правильно


 */