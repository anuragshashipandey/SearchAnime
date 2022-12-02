import React, { useState, useEffect, useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import "../styles/Header.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setList } from "../actions/index";
import { reset } from "../actions/index";

import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

const WhiteTextField = withStyles({
  root: {
    "& fieldset": {
      borderColor: "#fff",
      "&$focused": {
        borderColor: "black",
      },
    },
  },
})((props) => (
  <TextField inputProps={{ style: { color: "white" } }} {...props} />
));

function Header() {
  const dispatch = useDispatch();
  const [txt, setTxt] = useState("");
  let [searchtxt, setSearchTxt] = useState("");
  const [list, setL] = useState("");
  let pageNum = useSelector((state) => state.load);
  const listCard = useSelector((state) => state.cardList);
  const apiUrl = "https://api.jikan.moe/v3/search/anime?q=";
  const getCards = useCallback(() => {
    console.log(searchtxt);
    if (!!searchtxt)
      axios
        .get(`${apiUrl}${searchtxt}&limit=16&page=${pageNum}`)
        .then((res) => {
          if (res.data.total === 0);
          else {
            console.log(res);
            let tmpList = [...(pageNum === 1 ? [] : listCard)];
            res.data.results.map(
              (item) =>
                (tmpList = [
                  ...tmpList,
                  [item.image_url, item.title, item.mal_id],
                ])
            );
            setL(tmpList);
            dispatch(setList([...tmpList]));
          }
        })
        .catch((err) => console.log(err));
  },[searchtxt, pageNum]);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchtxt = txt;
    setSearchTxt(searchtxt);
    window.scrollTo(0, 0);
    dispatch(reset());
    pageNum = 1;
    getCards();
    setTxt("");
  };
  useEffect(() => {
    if (pageNum !== 1) getCards();
  }, [pageNum]);

  return (
    <div className="header">
      <form noValidate onSubmit={handleSubmit}>
        <WhiteTextField
          className="searchinput"
          variant="outlined"
          placeholder="Search Anything"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <p
                  onClick={handleSubmit}
                  style={{ color: "#fff", cursor: "pointer" }}
                >
                  Go
                </p>
              </InputAdornment>
            ),
          }}
        />
      </form>
      {list == "" ? (
        ""
      ) : (
        <p className="searchDetails">
          Requesting:{apiUrl}${searchtxt}&limit=16&page={pageNum}
        </p>
      )}
    </div>
  );
}

export default Header;
