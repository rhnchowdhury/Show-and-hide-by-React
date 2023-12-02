import { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(true);
  const [para, setPara] = useState(false);
  return (
    <div className="App">
      <h1>Show & Hide Practice</h1>
      <div>
        {
          show && <p className='app-p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ex ipsum aspernatur suscipit excepturi enim aliquid nisi! Exercitationem ut odit nisi harum aperiam. Quasi minima dicta at a officiis pariatur atque asperiores! Provident consequatur adipisci possimus, inventore qui suscipit dolorum at fugiat? Eligendi unde est, eius error suscipit numquam ad cumque explicabo animi assumenda maiores, ab nostrum labore dolorem nam saepe recusandae soluta omnis rerum. Labore ullam sed cum saepe dolore laboriosam, nihil quisquam doloremque maiores facere, earum, consectetur maxime hic delectus! Vitae voluptate illo quis rerum? Laborum repellat cumque, sunt ut quibusdam ullam aperiam voluptatem itaque vitae. Voluptate, itaque!</p>
        }
        <button className='btn-style' onClick={() => setShow(!show)}>{show === true ? "Hide" : "Show"}</button>
      </div>
      <div>
        <p className='app-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente fugit nulla deserunt voluptate necessitatibus commodi perspiciatis delectus. Ducimus magnam officiis harum. Explicabo nulla eius quos magni fugit. Molestiae vero ut, ad, sint consequuntur corrupti libero accusamus temporibus totam odio in delectus veritatis eos! Debitis cumque earum praesentium unde consequatur voluptas vel porro!

          {para && <span>
            Tenetur minus commodi nulla. Quae quaerat officiis atque rerum dolores maxime, tenetur culpa commodi maiores alias sunt voluptates, sequi ut ex quia laborum nisi aperiam totam sed ipsam, quasi voluptas obcaecati sint omnis. Adipisci, illo? Quas, quidem, earum nihil possimus fugiat cupiditate aliquam velit eum et molestiae porro sint nisi adipisci aliquid ratione sunt dolore! Nemo dignissimos doloremque ex accusantium distinctio reiciendis numquam repellendus itaque modi voluptatum consequatur ducimus autem cum natus repudiandae aliquid harum eaque aut quisquam magnam consequuntur excepturi consectetur, quia perferendis. Quaerat excepturi aspernatur ex, at quis, minima quas inventore eum, aliquid dolorem accusamus ut? Cum tenetur sit fugit esse nemo molestias quidem tempore optio aspernatur perspiciatis rem nam itaque eaque, accusantium neque, magni recusandae repellendus iure! Iure qui aperiam vitae, id deleniti odio ratione reiciendis veniam earum harum architecto eos doloribus libero quas dolore. Dolor natus aliquam, quas soluta quae optio doloribus aspernatur pariatur dignissimos, cum doloremque blanditiis commodi aut autem nostrum tempore fugiat. Vitae officia itaque error, at blanditiis reiciendis dolorum incidunt facilis nemo modi quae veritatis sequi quod aperiam neque totam aspernatur ut iste. Consequuntur, sunt obcaecati rerum quisquam amet provident corrupti voluptate illum doloremque neque quibusdam blanditiis, optio ab, deleniti cum aperiam esse impedit? Laborum aspernatur aut eius tempora, facere veritatis corrupti aliquid odio? Veniam culpa commodi, non vero asperiores rem sit in. Blanditiis vero accusamus voluptatum ut tenetur. Ex doloribus odio soluta eius, placeat porro rem aliquam recusandae rerum debitis iusto repellendus, suscipit, aut harum. Exercitationem aliquam eligendi quisquam tempora quasi rerum nihil expedita reprehenderit ipsam ad, repudiandae corporis perspiciatis? Ab praesentium, consequatur adipisci iusto nihil, nemo ut eius aliquid quam soluta repellat accusantium, minima harum. Animi voluptate alias, ipsum modi nostrum neque magnam culpa molestias exercitationem cumque, dolorum, magni reprehenderit ullam! Quibusdam, praesentium dolores sit ratione iusto eos dicta expedita maiores nulla illum repellendus porro! Enim voluptate cum quidem quam numquam officia sunt exercitationem inventore cumque soluta? Nesciunt quisquam quibusdam earum repudiandae veniam accusamus, in fuga iure deserunt alias a atque asperiores soluta quia optio dolor officia, impedit, dolore voluptates. Sed cupiditate tempora nihil, enim tenetur voluptate consequuntur qui vero cumque illo voluptatem quisquam voluptatum est? Tempora excepturi perspiciatis non ea, beatae facere pariatur vero, quam maxime repellat voluptatem odio recusandae repudiandae id rem! Nihil quibusdam ut nisi ad, rerum veniam assumenda numquam ullam facere magnam, accusamus enim at ipsum odit alias recusandae reiciendis. Incidunt nostrum veniam, laborum numquam odit quasi minima aliquid voluptatem reiciendis sit eos impedit, repellendus natus eius! Possimus temporibus unde, eos eveniet corporis impedit fugit exercitationem doloribus officia ullam amet perferendis quis quidem, quam recusandae hic eum, distinctio quibusdam numquam perspiciatis repellat! Neque quis a temporibus voluptas dolores suscipit velit impedit, eum maiores quibusdam doloremque?
          </span>}
          <button className='btn-para' onClick={() => setPara(!para)}>{para === true ? "See Less" : "See More"}</button>
        </p>
      </div>
    </div>
  );
}

export default App;
