import { useState, useEffect } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';

function APIMusica() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=latest')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setAlbums(data.data); 
        }
      })
      .catch((error) => console.error('Errore nel recuperare i dati:', error));
  }, []);

  return (
    <Container className="mt-2 mb-2">
      <h3 className="mt-5">Nuove uscite</h3>
      <Row xs={5} sm={5} md={5} className="g-4">
        {albums.length > 0 ? (
          albums.slice(0, 10).map((album, idx) => ( // Mostra solo i primi 10 album
            <Col key={idx}>
              <Card className="CardAPI">
                <Card.Img
                  className="immaginiApi"
                  variant="top"
                  src={album.album.cover_medium}
                  alt={album.album.title}
                />
                <Card.Body>
                  <Card.Title className="fs-6">{album.album.title}</Card.Title>
                  <Card.Text className="fs-7">Artista: {album.artist.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>Caricamento album...</p>
        )}
      </Row>
    </Container>
  );
}

export default APIMusica;
