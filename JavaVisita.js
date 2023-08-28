/* stylesVisita.css */
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.image {
  max-width: 100%;
  height: auto;
  width: 100%;
  object-fit: contain;
  border: 1px solid #ddd;
}
.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 24px;
}
.prev {
  left: 10px;
}
.next {
  right: 10px;
}
