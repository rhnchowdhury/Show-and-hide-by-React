import { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <h1>Show & Hide Practice</h1>
      <div>
        {
          show && <p className='app-p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ex ipsum aspernatur suscipit excepturi enim aliquid nisi! Exercitationem ut odit nisi harum aperiam. Quasi minima dicta at a officiis pariatur atque asperiores! Provident consequatur adipisci possimus, inventore qui suscipit dolorum at fugiat? Eligendi unde est, eius error suscipit numquam ad cumque explicabo animi assumenda maiores, ab nostrum labore dolorem nam saepe recusandae soluta omnis rerum. Labore ullam sed cum saepe dolore laboriosam, nihil quisquam doloremque maiores facere, earum, consectetur maxime hic delectus! Vitae voluptate illo quis rerum? Laborum repellat cumque, sunt ut quibusdam ullam aperiam voluptatem itaque vitae. Voluptate, itaque!</p>
        }
        <button type='button' onClick={() => setShow(!show)}>{show === true ? "Hide" : "Show"}</button>
      </div>
      <div>
        <p className='app-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur odit tempore a enim sed! Impedit cupiditate in excepturi laborum saepe modi unde quidem aliquam maiores inventore molestiae ab, at animi recusandae dolorum cumque vero deleniti? Explicabo non recusandae doloremque similique amet dignissimos maiores dolorum officia error aspernatur ex dolorem, rem fuga blanditiis impedit odio voluptatibus ipsa consequuntur provident. Neque fugiat modi sint similique ut sed consequatur est inventore in repellat unde ducimus, deserunt cum quasi dicta consectetur, beatae, totam fuga dolorum accusamus quam saepe! Similique libero inventore eum voluptas. Quisquam non impedit nihil rerum laudantium molestiae, earum tenetur nobis veniam.</p>
      </div>
    </div>
  );
}

export default App;
