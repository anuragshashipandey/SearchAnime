import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "../styles/Header.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setList } from "../actions/index";
import loadMoreCard from "../reducers/loadMore";
import { reset } from "../actions/index";
import { withStyles } from "@material-ui/core/styles";

const WhiteTextField = withStyles({
  root: {
    "& fieldset": {
      borderColor: "#fff",
      "&$focused": {
        borderColor: "black",
      },
    },
  },
})((props) => <TextField {...props} />);

function Header() {
  const dispatch = useDispatch();
  const [txt, setTxt] = useState("");
  const [list, setL] = useState("");
  const listLen = useSelector((state) => state.loadMoreCard);
  const apiUrl = "https://api.jikan.moe/v3/search/anime?q=";
  const getCards = () => {
    if (!!txt)
      axios
        .get(`${apiUrl}${txt}&limit=${listLen}`)
        .then((res) => {
          if (res.data.total === 0);
          else {
            console.log(res);
            let tmpList = [];
            res.data.results.map(
              (item) =>
                (tmpList = [
                  ...tmpList,
                  [item.image_url, item.title, item.mal_id],
                ])
            );
            setL(tmpList);
            console.log("tmplist", tmpList);
            dispatch(setList(tmpList));
          }
        })
        .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reset());
    getCards();
  };
  useEffect(() => {
    getCards();
  }, [listLen]);

  return (
    <div className="header">
      <form noValidate onSubmit={handleSubmit}>
        <WhiteTextField
          className="searchinput"
          variant="outlined"
          placeholder="Search Anything"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
          style={{ borderColor: "white" }}
        />
      </form>
      {list == "" ? (
        ""
      ) : (
        <p className="searchDetails">
          Requesting:{apiUrl}${txt}&limit={listLen}
        </p>
      )}
    </div>
  );
}

export default Header;
