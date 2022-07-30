import React, { Component } from 'react'
import { SearchBar } from './searchbar'
import { CountriesTable } from './countries-table'
import { InteractiveSvgMap } from './interactive-svg-map'

export class FilterableCountriesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            currentCountries: []
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleCurrentCountriesChange = this.handleCurrentCountriesChange.bind(this)
    }

    handleFilterTextChange(filterText) {
        this.setState({ filterText: filterText })
    }

    handleCurrentCountriesChange(childData) {
        this.setState({ currentCountries: childData })
    }

    render() {
        const { countries } = this.props
        return <div className='flex wrap'>
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <CountriesTable
                    countries={countries}
                    filterText={this.state.filterText}
                    onCurrentCountriesChange={this.handleCurrentCountriesChange}
                />
            </div>
            <InteractiveSvgMap
                currentCountries={this.state.currentCountries}
            />
        </div>
    }
}