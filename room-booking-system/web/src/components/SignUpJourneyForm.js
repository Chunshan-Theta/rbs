import React from 'react'

function SignUpJourneyForm({ onSignUp }) {
  return (
    <form className="form--signin"
      onSubmit={event => {
        event.preventDefault()
        const elements = event.target.elements
        const tag = elements.tag.value
        onSignUp({ tag })
      }}
    >

      <div className="form__group">
        <label className="form__label form__label--padding">
          {'請為這趟旅程取一個代號'}
          <input type="tag" name="tag" className="form__input" required />
        </label>
      </div>
      <button className="button button__form--submit">新建</button>
    </form>
  )
}

export default SignUpJourneyForm
