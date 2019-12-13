import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import "./Home.css";

export default function Home(props) {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function onLoad() {
            if (!props.isAuthenticated) {
                return;
            }

            try {
                const notes = await loadNotes();
                setNotes(notes);
            } catch (e) {
                alert(e);
            }

            setIsLoading(false);
        }

        onLoad();
    }, [props.isAuthenticated]);

    function loadNotes() {
        return API.get("notes", "/notes");
    }

    function renderNotesList(notes) {
        return null;
    }

    function renderLander() {
        return (
            <div className="lander">
              <h1>Scratch</h1>
              <p>A simple note taking app</p>
            </div>
        );
    }

    function renderNotes() {
        return (
            <div className="notes">
              <PageHeader>Your Notes</PageHeader>
              <ListGroup>
                {!isLoading && renderNotesList(notes)}
              </ListGroup>
            </div>
        );
    }

    return (
        <div className="Home">
          {props.isAuthenticated ? renderNotes() : renderLander()}
        </div>
    );
}
