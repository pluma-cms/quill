<template>
 <v-card
    flat
    class="transparent"
    height="100%"
    >
    <v-card-text>
      <div class="primary--text body-1">
        <strong>{{ __('PSDM SUP') }}</strong>
      </div>
      <h2 v-html="item.title"></h2>
      <div class="grey--text">
        {{ item.created }} {{ trans('by') }}
        <a
          href=""
          v-html="item.author"
          >
        </a>
      </div>
    </v-card-text>
    <v-card-text
      v-html="item.description"
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CourseOverview',

  data () {
    return {
      item: {
        title: 'Communicate and Relate Effectively at the Workplace at Operations Level',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea corporis sapiente, blanditiis voluptas, commodi aliquid officia magni temporibus nulla iusto, unde corrupti deserunt ipsum error labore praesentium voluptatem ipsam saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dignissimos alias odio architecto atque minus earum, iste aliquam laboriosam, reprehenderit sint in quas voluptas, consequatur. Neque libero doloribus esse qui.',
        created: '3 weeks ago',
        author: 'Lemony Snicket',
      }
    }
  }
}
</script>
