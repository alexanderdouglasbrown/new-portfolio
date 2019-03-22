import React from "react"
import GitLink from "./GitLink"
import "./Project.css"

class Project extends React.Component {
    titleWithURL() {
        return (<a href={this.props.url}>{this.props.title}</a>)
    }

    titleWithoutURL() {
        return (<span>{this.props.title}</span>)
    }

    render() {
        return (
            <div className="row project">
                <div className="col-sm-4 col-xs-12">
                    <img
                        className="img-thumbnail img-responsive project-image"
                        alt="" src={this.props.image}
                        onClick={() => this.props.showLightboxCallback(this.props.image)}
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <div className="col-sm-8 col-xs-12">
                    <h3>{this.props.url != null ? this.titleWithURL() : this.titleWithoutURL()}
                        {this.props.giturl != null ? <GitLink url={this.props.giturl} /> : null}
                        <small><br />{this.props.description}</small></h3>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Project