import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section>
      <h2>About</h2>
      <p>
        At the same time we had reason to hope that these two poor creatures
        would not see each other again, as the unhappy Ellen never appeared in
        the daytime, either in the saloons or on the deck.
      </p>

      {/* Affichage conditionnel du texte supplémentaire */}
      {
      showMore && (
        <p>
          Only at night, perhaps eluding her gaoler, she came out to bathe
          herself in the damp air, and demand of the wind a smooth passage.
          as the unhappy Ellen never appeared in
        the daytime, either in the saloons or on the deck.
        </p>
      )}

      {/* Bouton pour afficher/cacher le texte */}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Lire moins" : "Lire plus"}
      </button>
    </section>
  );
};

export default About;
