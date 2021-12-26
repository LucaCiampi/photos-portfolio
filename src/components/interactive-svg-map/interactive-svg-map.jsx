import React, { Component } from 'react'
import { ReactComponent as SvgWorldMap } from '../../assets/world.svg';

export class InteractiveSvgMap extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.paths = [...document.getElementsByTagName('path')]
    }

    componentDidUpdate() {
        //TODO: error here in console
        this.colorCountries()
    }

    getCountryName(country) {
        if (country.hasAttribute("name")) {
            return country.getAttribute("name")
        } else if (country.hasAttribute("class")) {
            return country.getAttribute("class")
        }
    }

    colorCountries() {
        if (null !== this.paths) {
            this.paths.forEach(path => {
                if (-1 === this.props.currentCountries.indexOf(this.getCountryName(path))) {
                    path.removeAttribute("fill")
                    return
                }
                path.setAttribute("fill", "#60a3bc")
                path.setAttribute("visited", "true")
            })
        }
    }

    render() {
        return <div className='worldmap'>
            <SvgWorldMap className='worldmap-svg' />
        </div>
    }
}