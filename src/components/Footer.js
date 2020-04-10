import React , {Component} from 'react'

export class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                    <strong>Created</strong> by <a href="https://jgthms.com">JNG</a>. 
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. 
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
            </footer>
        )
    }
}