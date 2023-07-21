import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = () => {


  return (
    <div className="pagination_table">
      
      
     <div className="pagination">
  <a href="#"><ArrowLeftIcon className="icon-pagination" /></a>
  <a href="#" className="active">1</a>
  <a href="#" >2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#"><ArrowRightIcon className="icon-pagination" /></a>
</div>
    </div>
  );
};

export default Pagination;
