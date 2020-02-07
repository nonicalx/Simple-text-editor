import React from 'react'




const Editor = () => {


    return (
        <div>
            <main>
                <div id="text-formatters">
                    <button><b>B</b></button>
                    <button><i>I</i></button>
                    <button><u>U</u></button>
                </div>
                <div id="textSpace">
                    <textarea rows={30} cols={50}></textarea>
                </div>

            </main>
        </div>
    )
}
export default Editor