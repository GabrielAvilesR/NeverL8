import Event from './model'

export const create = ({body}, res, next) =>
  Event.create(body)
    .then((event) => {
        console.log(event)
        res.status(201).json(event)
    })
    .catch(next)

export const index = (req, res, next) =>
  Event.find()
    .then((events) => {
        res.status(200).json(events)
    })
    .catch(next)
