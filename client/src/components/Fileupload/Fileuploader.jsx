import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function FileUploadForm() {
  return (
    <>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>entrer votre fichier ici svp
        </Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Button >Submit</Button>
      </>
  );
}

export default FileUploadForm;