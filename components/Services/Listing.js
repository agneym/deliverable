import firebase from "firebase/app";
import { useEffect, useState } from "react";
import { List } from "antd";

import Card from "./Card";

function Listing() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const db = firebase.firestore();
    const servicesCollectionRef = db.collection("services");
    servicesCollectionRef
      .get()
      .then(function(querySnapshot) {
        let services = [];
        querySnapshot.forEach(function(doc) {
          services.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setData(services);
        setLoading(false);
      })
      .catch(function(error) {
        setLoading(false);
      });
  }, []);
  return (
    <section>
      <List
        itemLayout="horizontal"
        dataSource={data}
        loading={loading}
        renderItem={service => <Card data={service} />}
      />
    </section>
  );
}

export default Listing;
