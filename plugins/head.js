export default ({ app }, inject) => {
  const getHead = (title = "", description = "") => ({
    title,
    meta: [{ hid: "description", name: "description", content: description }],
  })

  inject("getHead", getHead)

  inject("getRoomHead", ({ title, description }) => getHead(title, description))
}
