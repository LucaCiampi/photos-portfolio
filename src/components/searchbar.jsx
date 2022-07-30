import React, { Component } from 'react'

export class SearchBar extends React.PureComponent {

    constructor(props) {
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value)
    }

    render() {
        const { filterText } = this.props
        return <div>
            <div className='form-group'>
                <input
                    type="text"
                    className="form-control"
                    value={filterText}
                    placeholder='Search for a place…'
                    onChange={this.handleFilterTextChange}
                />
            </div>
        </div>
    }
}