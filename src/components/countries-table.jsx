import React, { Component } from 'react'

export class CountriesTable extends React.PureComponent {

    constructor(props) {
        super(props)
        this.handleCurrentCountriesChange = this.handleCurrentCountriesChange.bind(this)
    }

    handleCurrentCountriesChange(currentCountries) {
        this.props.onCurrentCountriesChange(currentCountries)
    }

    render() {
        this.filterText = this.props.filterText.toUpperCase();
        const rows = []
        const currentCountries = []
        this.props.countries.forEach(country => {
            if (-1 === country.toUpperCase().indexOf(this.filterText)) {
                return
            }
            rows.push(<CountryRow key={country} country={country} />)
            currentCountries.push(country)
        });

        // TODO: does not work without PureComponent
        this.handleCurrentCountriesChange(currentCountries)

        return <ul>{rows}</ul>
    }
}


const CountryRow = React.memo(function ({ country }) {
    return <li onClick={(e) => { window.history.pushState('', e.target.innerHTML, e.target.innerHTML);console.log(country)}}>{country}</li>
})