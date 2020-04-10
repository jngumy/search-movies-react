import React from 'react'
import {Link} from 'react-router-dom'

export const NotFound = () => {
    return(
        <div >
            <article className="message">
            <div className="message-header">
                <p>404 Error!</p>
            </div>
            <div className="message-body">
                La pagina solicitada <strong>no existe</strong>.
            </div>
            </article>
            <Link className = "button is-info" to = '/'> Volver</Link>
        </div>
    )
}