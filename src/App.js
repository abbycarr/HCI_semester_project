import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, ListGroup, Row, Col, Nav, Tab } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <Jumbotron fluid>
          <Container>
            <h1>BulletinBoard</h1>
            <p>Neighbors have had a harder time communicating with each other during the pandemic.
            Communities that were already close-knit found it hard to social distance and maintain
            their connections while neighbors who had not already connected felt more isolated than ever.
            Although we cannot create that connection ourselves, we want to allow more fluid communication
               between members of a community in the hopes that we can help them help each other</p>
          </Container>
        </Jumbotron>
        <ListGroup>
          <ListGroup.Item variant="info"><h4>Group Members</h4></ListGroup.Item>
          <ListGroup.Item class="names">
            Hadeel Farhan
            <a href="mailto:farhan.h@northeastern.edu" class="btn btn-info float-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
              </svg>
              &nbsp;farhan.h@northeastern.edu
            </a>
          </ListGroup.Item>
          <ListGroup.Item class="names">
            Nivashini Suresh
            <a href="mailto:fsuresh.ni@northeastern.edu" class="btn btn-info float-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
              </svg>
              &nbsp;suresh.ni@northeastern.edu
            </a>
          </ListGroup.Item>
          <ListGroup.Item class="names">
            Abby Carr
            <a href="mailto:carr.ab@northeastern.edu" class="btn btn-info float-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
              </svg>
              &nbsp;carr.ab@northeastern.edu
            </a>
          </ListGroup.Item>
        </ListGroup>
        <div class="mt-5">
          <Tab.Container id="left-tabs-example" defaultActiveKey="hw4-1">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="hw1">HW1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="hw2" >HW2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey="hw3">HW3</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey="hw3v1">Version 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey="hw3v2">Version 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="hw4-1">HW4-P1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="hw4-2" disabled>HW4-P2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="hw5" disabled>HW5</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="hw1">
                    <h3>Team 1: Team Contract and Project Proposal</h3>
                    <p>
                      Click&nbsp;
                      <a rel="noreferrer" target="_blank" href="https://github.com/abbycarr/HCI_semester_project/blob/master/HW1/T1-NAH-Carr-Farhan-Suresh.pdf">Here</a>
                      &nbsp; to view our Team Contract and Project Proposal.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="hw2">
                    <h3>Team 2: Requirements Analysis</h3>
                    <p>
                      Click&nbsp;
                      <a rel="noreferrer" target="_blank" href="https://github.com/abbycarr/HCI_semester_project/blob/master/HW2/T2-NAH-Carr-Farhan-Suresh.pdf">Here</a>
                      &nbsp; to view our Requirements Analysis.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="hw3">
                    <h3>Team 3: Prototyping</h3>
                    <p>The Version 1 and Version 2 pages host our photos for the paper prototype and revised interface design respectively.</p>
                    <p>
                      Click&nbsp;
                      <a rel="noreferrer" target="_blank" href="https://github.com/abbycarr/HCI_semester_project/blob/master/HW3/T3-NAH-Carr-Farhan-Suresh.pdf">Here</a>
                      &nbsp; to view our Prototyping Deliverable.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="hw3v1">
                    <h3>Version 1</h3>
                    <p>Below are photos from our Paper Prototype </p>
                    <img width="500" src="https://github.com/abbycarr/HCI_semester_project/blob/master/HW3/Blank.JPG?raw=true" alt="Blank"></img>
                    <img width="500" src="https://github.com/abbycarr/HCI_semester_project/blob/master/HW3/Components.JPG?raw=true" alt="Components"></img>
                    <img width="500" src="https://github.com/abbycarr/HCI_semester_project/blob/master/HW3/Welcome%20Blank.JPG?raw=true" alt="Welcome Blank"></img>
                    <img width="500" src="https://github.com/abbycarr/HCI_semester_project/blob/master/HW3/Welcome.JPG?raw=true" alt="Welcome"></img>
                    <img width="500" src="https://github.com/abbycarr/HCI_semester_project/blob/master/HW3/Events.JPG?raw=true" alt="Events"></img>
                    <img width="500" src="https://github.com/abbycarr/HCI_semester_project/blob/master/HW3/Advertise.JPG?raw=true" alt="Advertise"></img>
                    <img width="500" src="https://github.com/abbycarr/HCI_semester_project/blob/master/HW3/Chat.JPG?raw=true" alt="Chat"></img>
                  </Tab.Pane>
                  <Tab.Pane eventKey="hw3v2">
                    <h3>Version 2</h3>
                    <p>Below are photos from our Revised Interface Design </p>
                    <img width="500" src="https://github.com/abbycarr/HCI_semester_project/blob/master/HW3/Screen%20Shot%202021-03-15%20at%2011.27.03.png?raw=true" alt="Welcome Board"></img>
                    <img width="500" src="https://github.com/abbycarr/HCI_semester_project/blob/master/HW3/Screen%20Shot%202021-03-15%20at%2011.27.08.png?raw=true" alt="Advertising Board"></img>
                    <img width="500" src="https://github.com/abbycarr/HCI_semester_project/blob/master/HW3/Screen%20Shot%202021-03-15%20at%2011.27.12.png?raw=true" alt="Casual Chat Board"></img>
                    <img width="500" src="https://github.com/abbycarr/HCI_semester_project/blob/master/HW3/Screen%20Shot%202021-03-15%20at%2011.27.15.png?raw=true" alt="Events Board"></img>
                  </Tab.Pane>
                  <Tab.Pane eventKey="hw4-1">
                    <h3>Team 4: Interface Evaluation - Part 1</h3>
                    <p>Click&nbsp;
                      <a rel="noreferrer" target="_blank" href="https://github.com/abbycarr/HCI_semester_project/blob/master/HW4/T4-Part1-NAH-Carr-Farhan-Suresh.pdf">Here</a>
                      &nbsp;to view our Interface Evaluation deliverable. It contains the evaluation instructions for our web application at&nbsp;
                      <a rel="noreferrer" target="_blannk" href="bulletinboard.developinginteractions.com">bulletinboard.developinginteractions.com</a>.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="hw4-2">
                    <h3>Team 4: Interface Evaluation - Part 2</h3>
                    <p>... And Part 2 goes in this Tab!</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="hw5">
                    <h3>Team 5: Final Project and Presentation</h3>
                    <p>Last but not leaast, to be HW5!</p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </body>
    </div>
  );
}

export default App;
