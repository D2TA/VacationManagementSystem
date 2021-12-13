import React from 'react';
import './App.css';

function TravelEmoji() {
  return <span class="material-icons-outlined">airplane_ticket</span>
}

// Country Selection
function getListCountry() {
  const country = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua & Deps', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Rep', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Congo {Democratic Rep}', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland {Republic}', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar, {Burma}', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russian Federation', 'Rwanda', 'St Kitts & Nevis', 'St Lucia', 'Saint Vincent & the Grenadines', 'Samoa', 'San Marino', 'Sao Tome & Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];
  const countryList = country.map( (country) => <option value={country}>{country}</option>);
  return countryList;
}

function SelectCountry() {
  const CountryDiv = <div><label for="SelectCountry">Location:</label><select name="CountryDropdown" id="CountryDropdown">{getListCountry()}</select></div>;
  return CountryDiv;
}

function ApplyStyleCountry() {
  return document.getElementById('CountryDropdown').style.backgroundColor = "orange";
}

// Start Date Selection
function getStartDate() {
  return <input type="date" id="SelectStartDate" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31"></input>;
}

function SelectStartDate() {
  const StartDateDiv = <div><label for="SelectStartDate">Start date:</label>{getStartDate()}</div>;
  return StartDateDiv;
}

// End Date Select
function getEndDate() {
  return <input type="date" id="SelectEndDate" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31"></input>;
}

function SelectEndDate() {
  const EndDateDiv = <div><label for="SelectEndDate">End date:</label>{getEndDate()}</div>;
  return EndDateDiv  
}

// Number Guests Select
function NumberGuests() {
  return <div><label> Guests:</label><input type="number"></input></div>;
}

function App() {
  return (
    <main>
      <h1><i> Oh the places you’ll go {TravelEmoji()} </i></h1>
      <div class= "TripNavigation">
        {SelectCountry()} {ApplyStyleCountry()}
        {SelectStartDate()}
        {SelectEndDate()}
        {NumberGuests()}
      </div>
      <button> <span class="material-icons-outlined">search</span></button>
    </main>
  );
}

export default App;