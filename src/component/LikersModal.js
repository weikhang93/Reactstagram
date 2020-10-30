import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroupItem, ListGroup } from 'reactstrap';
import {Link} from 'react-router-dom'

const LikersModal = (props) => {
  const {
    buttonLabel,
    className,
    likers
  } = props;
  console.log(likers)

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="d-flex justify-content-end mb-2 mr-4">
      <Button color="secondary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Likers</ModalHeader>
        <ModalBody>
          <ListGroup>

            {likers.length===0?<ListGroupItem className="text-center"> :- ( Hmm...Nobody liked this image yet... Be the first one!</ListGroupItem>:
            
            
            
            
            likers.map(liker => {
              return (<>


                <Link to={`/user/${liker.id}`}>
                  <ListGroupItem className="text-center">
                    <img style={{ width: "30px", height: "30px" }} className="rounded-circle" src={liker.profileImage} alt={liker.id}></img> {liker.username}
                  </ListGroupItem>
                </Link>

              </>)

            })
            }

          </ListGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LikersModal;