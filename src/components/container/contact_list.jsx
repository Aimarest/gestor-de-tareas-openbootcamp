import React from 'react';
import {  Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact = new Contact('Nombre', 'Apellido', 'email', false);

    return (
        <div>
            <div>
                <h2> Contacts: </h2>
            </div>
            {/* To do: Aplicar un map o un for para renderizar una lista*/}
            <ContactComponent contact={defaultContact} />
        </div>
    );
};




export default ContactListComponent;