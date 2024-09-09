<template>
  <div>
    <nav class="border-b">
      <ul>
        <li>
          <router-link :to="{ name: 'ticker' }">
            Fixture ticker
          </router-link>
        </li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Page',
  };
</script>
