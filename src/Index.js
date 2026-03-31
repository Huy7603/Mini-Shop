const products = [
  {
    id: 1,
    name: "Áo thun basic",
    description: "Áo thun cotton mềm mại, phù hợp mặc hàng ngày.",
    fullDescription:
      "Áo thun basic chất cotton co giãn tốt, thấm hút mồ hôi, phù hợp cho đi học, đi chơi và mặc hàng ngày.",
    price: 150000,
    oldPrice: 199000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700",
    tag: "Bán chạy",
    discount: "-25%",
    rating: "★★★★☆ 4.6"
  },
  {
    id: 2,
    name: "Giày sneaker",
    description: "Giày sneaker trẻ trung, năng động.",
    fullDescription:
      "Giày sneaker thiết kế hiện đại, phù hợp phong cách trẻ trung, đi học, đi làm hoặc dạo phố.",
    price: 450000,
    oldPrice: 599000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
    tag: "Hot",
    discount: "-25%",
    rating: "★★★★★ 4.9"
  },
  {
    id: 3,
    name: "Túi xách thời trang",
    description: "Thiết kế hiện đại, tiện lợi, dễ phối đồ.",
    fullDescription:
      "Túi xách thời trang với nhiều ngăn chứa, thiết kế tối giản, phù hợp cho cả đi làm và đi chơi.",
    price: 320000,
    oldPrice: 389000,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700",
    tag: "Mới",
    discount: "-18%",
    rating: "★★★★☆ 4.5"
  },
  {
    id: 4,
    name: "Đồng hồ nam",
    description: "Phong cách lịch lãm, sang trọng.",
    fullDescription:
      "Đồng hồ nam dây kim loại, thiết kế mạnh mẽ, phù hợp cho môi trường công sở và sự kiện trang trọng.",
    price: 780000,
    oldPrice: 920000,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=700",
    tag: "Cao cấp",
    discount: "-15%",
    rating: "★★★★★ 4.8"
  },
  {
    id: 5,
    name: "Tai nghe Bluetooth",
    description: "Âm thanh rõ nét, pin lâu.",
    fullDescription:
      "Tai nghe Bluetooth kết nối nhanh, thời lượng pin cao, phù hợp học tập, làm việc và giải trí.",
    price: 520000,
    oldPrice: 650000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
    tag: "Tiện ích",
    discount: "-20%",
    rating: "★★★★☆ 4.7"
  },
  {
    id: 6,
    name: "Balo laptop",
    description: "Chống nước, nhiều ngăn chứa.",
    fullDescription:
      "Balo laptop thời trang, chống nước nhẹ, chứa được laptop và nhiều vật dụng cá nhân.",
    price: 280000,
    oldPrice: 350000,
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=700",
    tag: "Phổ biến",
    discount: "-20%",
    rating: "★★★★☆ 4.6"
  },
  {
    id: 7,
    name: "Áo khoác denim",
    description: "Trẻ trung, cá tính, dễ phối đồ.",
    fullDescription:
      "Áo khoác denim phong cách hiện đại, chất vải bền đẹp, phù hợp mặc đi học, đi chơi hoặc dạo phố.",
    price: 390000,
    oldPrice: 470000,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=700",
    tag: "Thời trang",
    discount: "-17%",
    rating: "★★★★☆ 4.6"
  },
  {
    id: 8,
    name: "Kính mát thời trang",
    description: "Thiết kế thanh lịch, bảo vệ mắt tốt.",
    fullDescription:
      "Kính mát thời trang với tròng chống chói, kiểu dáng hiện đại, phù hợp đi chơi, du lịch và dạo phố.",
    price: 210000,
    oldPrice: 270000,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700",
    tag: "Phụ kiện",
    discount: "-22%",
    rating: "★★★★☆ 4.4"
  },
  {
    id: 9,
    name: "Ví da nam",
    description: "Nhỏ gọn, sang trọng, tiện dụng.",
    fullDescription:
      "Ví da nam thiết kế tối giản, nhiều ngăn đựng thẻ và tiền, phù hợp cho người thích phong cách lịch lãm.",
    price: 260000,
    oldPrice: 320000,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700",
    tag: "Sang trọng",
    discount: "-19%",
    rating: "★★★★☆ 4.5"
  },
  {
    id: 10,
    name: "Nón lưỡi trai",
    description: "Năng động, thoải mái, dễ phối đồ.",
    fullDescription:
      "Nón lưỡi trai chất liệu bền, form đẹp, thích hợp cho hoạt động ngoài trời, thể thao và thời trang thường ngày.",
    price: 140000,
    oldPrice: 180000,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=700",
    tag: "Outdoor",
    discount: "-22%",
    rating: "★★★★☆ 4.3"
  },
  {
    id: 11,
    name: "Giày loafer nam",
    description: "Lịch sự, êm chân, phù hợp công sở.",
    fullDescription:
      "Giày loafer nam thiết kế tinh tế, dễ mang, phù hợp môi trường công sở, gặp gỡ khách hàng hoặc đi sự kiện.",
    price: 560000,
    oldPrice: 690000,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=700",
    tag: "Công sở",
    discount: "-19%",
    rating: "★★★★★ 4.8"
  },
  {
    id: 12,
    name: "Đồng hồ thể thao",
    description: "Mạnh mẽ, hiện đại, chống nước nhẹ.",
    fullDescription:
      "Đồng hồ thể thao phong cách năng động, mặt số rõ nét, phù hợp đi học, đi làm và các hoạt động ngoài trời.",
    price: 610000,
    oldPrice: 760000,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=700",
    tag: "Thể thao",
    discount: "-20%",
    rating: "★★★★☆ 4.7"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = localStorage.getItem("currentUser") || "";
let theme = localStorage.getItem("theme") || "light";

const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const subtotalPrice = document.getElementById("subtotalPrice");
const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");
const sortFilter = document.getElementById("sortFilter");
const welcomeUser = document.getElementById("welcomeUser");
const themeBtn = document.getElementById("themeBtn");
const cartCount = document.getElementById("cartCount");
const logoutBtn = document.getElementById("logoutBtn");
const toast = document.getElementById("toast");
const cartPopup = document.getElementById("cartPopup");
const cartOverlay = document.getElementById("cartOverlay");

function formatPrice(price) {
  return price.toLocaleString("vi-VN") + " VNĐ";
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function applyTheme() {
  document.body.classList.toggle("dark", theme === "dark");
  themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);
  applyTheme();
}

function openCartPopup() {
  cartPopup.classList.add("show");
  cartOverlay.classList.add("show");
}

function closeCartPopup() {
  cartPopup.classList.remove("show");
  cartOverlay.classList.remove("show");
}

function toggleCartPopup() {
  const isOpen = cartPopup.classList.contains("show");
  if (isOpen) {
    closeCartPopup();
  } else {
    openCartPopup();
  }
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;
}

function getFilteredProducts() {
  const keyword = searchInput.value.toLowerCase().trim();
  const priceValue = priceFilter.value;
  const sortValue = sortFilter.value;

  let filtered = [...products];

  if (keyword) {
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(keyword) ||
      product.description.toLowerCase().includes(keyword) ||
      product.tag.toLowerCase().includes(keyword)
    );
  }

  if (priceValue === "1") {
    filtered = filtered.filter((product) => product.price < 200000);
  } else if (priceValue === "2") {
    filtered = filtered.filter(
      (product) => product.price >= 200000 && product.price <= 500000
    );
  } else if (priceValue === "3") {
    filtered = filtered.filter((product) => product.price > 500000);
  }

  if (sortValue === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    productList.innerHTML = `
      <div class="empty-state">
        <h3>Không tìm thấy sản phẩm phù hợp</h3>
        <p>Hãy thử từ khóa khác hoặc thay đổi bộ lọc.</p>
      </div>
    `;
    return;
  }

  productList.innerHTML = filtered
    .map(
      (product) => `
        <div class="product-card">
          <div class="product-image-wrap">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <span class="product-discount">${product.discount}</span>
            <span class="product-fav" title="Yêu thích">♥</span>
          </div>

          <div class="product-info">
            <div class="product-top">
              <h3>${product.name}</h3>
              <span class="product-tag">${product.tag}</span>
            </div>

            <div class="rating">${product.rating}</div>
            <p>${product.description}</p>

            <div class="price-row">
              <div class="price">${formatPrice(product.price)}</div>
              <div class="old-price">${formatPrice(product.oldPrice)}</div>
            </div>

            <div class="btn-group">
              <button class="btn btn-primary" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
              <button class="btn btn-secondary" onclick="showProductDetail(${product.id})">Chi tiết</button>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

function addToCart(id) {
  const item = cart.find((product) => product.id === id);

  if (item) {
    item.quantity += 1;
  } else {
    const product = products.find((p) => p.id === id);
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  renderCart();
  updateCartCount();
  openCartPopup();
  showToast("Đã thêm sản phẩm vào giỏ hàng");
}

function changeQuantity(id, amount) {
  const item = cart.find((product) => product.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter((product) => product.id !== id);
  }

  saveCart();
  renderCart();
  updateCartCount();
}

function removeFromCart(id) {
  cart = cart.filter((product) => product.id !== id);
  saveCart();
  renderCart();
  updateCartCount();
  showToast("Đã xóa sản phẩm khỏi giỏ hàng");
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="empty-state">Chưa có sản phẩm nào trong giỏ hàng.</div>`;
    subtotalPrice.textContent = "0 VNĐ";
    totalPrice.textContent = "Tổng: 0 VNĐ";
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </div>

          <div class="cart-item-main">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${formatPrice(item.price)} / sản phẩm</div>

            <div class="cart-item-actions">
              <div class="qty-controls">
                <button onclick="changeQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
              </div>

              <button class="remove-btn" onclick="removeFromCart(${item.id})">Xóa</button>
            </div>
          </div>

          <div class="cart-line-total">${formatPrice(item.price * item.quantity)}</div>
        </div>
      `
    )
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  subtotalPrice.textContent = formatPrice(total);
  totalPrice.textContent = "Tổng: " + formatPrice(total);
}

function showProductDetail(id) {
  const product = products.find((p) => p.id === id);

  document.getElementById("productDetail").innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="rating" style="margin-bottom:8px;">${product.rating}</div>
    <h2 style="margin-bottom: 10px;">${product.name}</h2>
    <p style="margin-bottom: 12px; color: var(--text-soft); line-height: 1.8;">
      ${product.fullDescription}
    </p>
    <div style="display:flex; gap:10px; align-items:center; margin-bottom:16px;">
      <div style="font-size: 24px; color: var(--primary); font-weight: 900;">
        ${formatPrice(product.price)}
      </div>
      <div style="text-decoration:line-through; color:var(--text-soft);">
        ${formatPrice(product.oldPrice)}
      </div>
    </div>
    <button class="btn btn-primary" onclick="addToCart(${product.id}); closeProductModal();">
      Thêm vào giỏ
    </button>
  `;

  document.getElementById("productModal").style.display = "flex";
}

function closeProductModal() {
  document.getElementById("productModal").style.display = "none";
}

function openAuthModal() {
  document.getElementById("authModal").style.display = "flex";
}

function closeAuthModal() {
  document.getElementById("authModal").style.display = "none";
}

function switchTab(tab) {
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (tab === "login") {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
  } else {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
  }
}

function register() {
  const username = document.getElementById("registerUsername").value.trim();
  const password = document.getElementById("registerPassword").value.trim();
  const confirmPassword = document.getElementById("registerConfirmPassword").value.trim();

  if (!username || !password || !confirmPassword) {
    showToast("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  if (password.length < 4) {
    showToast("Mật khẩu phải có ít nhất 4 ký tự");
    return;
  }

  if (password !== confirmPassword) {
    showToast("Mật khẩu nhập lại không khớp");
    return;
  }

  const existed = users.find((user) => user.username === username);
  if (existed) {
    showToast("Tên đăng nhập đã tồn tại");
    return;
  }

  users.push({ username, password });
  saveUsers();

  document.getElementById("registerUsername").value = "";
  document.getElementById("registerPassword").value = "";
  document.getElementById("registerConfirmPassword").value = "";

  showToast("Đăng ký thành công");
  switchTab("login");
}

function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    showToast("Sai tên đăng nhập hoặc mật khẩu");
    return;
  }

  currentUser = username;
  localStorage.setItem("currentUser", currentUser);

  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";

  updateUserUI();
  closeAuthModal();
  showToast("Đăng nhập thành công");
}

function logout() {
  currentUser = "";
  localStorage.removeItem("currentUser");
  updateUserUI();
  showToast("Đã đăng xuất");
}

function updateUserUI() {
  if (currentUser) {
    welcomeUser.textContent = `Xin chào, ${currentUser}`;
    logoutBtn.classList.remove("hidden");
  } else {
    welcomeUser.textContent = "Chưa đăng nhập";
    logoutBtn.classList.add("hidden");
  }
}

function checkout() {
  if (cart.length === 0) {
    showToast("Giỏ hàng đang trống");
    return;
  }

  if (!currentUser) {
    showToast("Vui lòng đăng nhập trước khi thanh toán");
    openAuthModal();
    return;
  }

  showToast("Thanh toán thành công (demo)");
  cart = [];
  saveCart();
  renderCart();
  updateCartCount();
  closeCartPopup();
}

window.onclick = function (e) {
  const productModal = document.getElementById("productModal");
  const authModal = document.getElementById("authModal");

  if (e.target === productModal) closeProductModal();
  if (e.target === authModal) closeAuthModal();
};

searchInput.addEventListener("input", renderProducts);
priceFilter.addEventListener("change", renderProducts);
sortFilter.addEventListener("change", renderProducts);

applyTheme();
renderProducts();
renderCart();
updateUserUI();
updateCartCount();