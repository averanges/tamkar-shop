export const listOfCountries = ['United States', 'Canada', 'United Arab Emirates',
'Thailand','Iceland','---','Afganistan', 'Albania','Algeria','Andorra','Angola','Anguilla', 'Antigua and Barbuda','Argentina',
,'Austria','Australia','Azerbaijan','Bosnia and Herzegovina', '	Bangladesh', 'Belgium', 'Bulgaria', 'Brunei', 'Brazil',
'Belarus', 'China','Czechia', 'Denmark', 'Egypt', 'Finland', 'France', 'Georgia', 'Germany', 'Hong Kong', 'India',
'Indonesia', 'Ireland', 'Israel', 'Italy', 'Japan', 'Netherlands', 'New Zealand', 'Poland', 'Russia', 'South Africa', 
'Spain', 'Switzerland' , 'United Kingdom', 'Vietnam'].map((el, idx) => <option value={el} disabled={el === '---' ? true : false} key={idx}>{el}</option>)