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
            <h1>This is our HCI project</h1>
            <p>We can post our team assignnments and other work here!</p>
            <p>(<i>pst- Don't worry. We'll update the description soon</i>)</p>
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
          <Tab.Container id="left-tabs-example" defaultActiveKey="hw1">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="hw1">HW1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="hw2" disabled>HW2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey="hw3" disabled>HW3</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="hw4-1" disabled>HW4-P1</Nav.Link>
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
                      This is an example link- it currently goes to&nbsp;
                      <a rel="noreferrer" target="_blank" href="https://github.com/abbycarr/HCI_semester_project/">GitHub</a>
                      .
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="hw2">
                    <h3>Team 2: Requirements Analysis</h3>
                    <p>This is where HW2 will be!</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="hw3">
                    <h3>Team 3: Prototyping</h3>
                    <p>This is where HW3 is gonna go!</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="hw4-1">
                    <h3>Team 4: Interface Evaluation - Part 1</h3>
                    <p>Look- HW4's Part 1 will appear here!</p>
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
