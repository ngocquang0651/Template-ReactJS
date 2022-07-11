import {useEffect} from 'react'

const useTitle = (title: string) => {
    const updateTitle = () => {
    document.title = title;
    };
    useEffect(updateTitle, [title]);
  };
  export default useTitle;

